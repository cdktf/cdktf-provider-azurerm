# `eventhubAuthorizationRule` Submodule <a name="`eventhubAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.eventhubAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventhubAuthorizationRule <a name="EventhubAuthorizationRule" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule azurerm_eventhub_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.Initializer"></a>

```typescript
import { eventhubAuthorizationRule } from '@cdktf/provider-azurerm'

new eventhubAuthorizationRule.EventhubAuthorizationRule(scope: Construct, id: string, config: EventhubAuthorizationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig">EventhubAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig">EventhubAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.resetListen">resetListen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.resetManage">resetManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.resetSend">resetSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.putTimeouts"></a>

```typescript
public putTimeouts(value: EventhubAuthorizationRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts">EventhubAuthorizationRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetListen` <a name="resetListen" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.resetListen"></a>

```typescript
public resetListen(): void
```

##### `resetManage` <a name="resetManage" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.resetManage"></a>

```typescript
public resetManage(): void
```

##### `resetSend` <a name="resetSend" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.resetSend"></a>

```typescript
public resetSend(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventhubAuthorizationRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.isConstruct"></a>

```typescript
import { eventhubAuthorizationRule } from '@cdktf/provider-azurerm'

eventhubAuthorizationRule.EventhubAuthorizationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.isTerraformElement"></a>

```typescript
import { eventhubAuthorizationRule } from '@cdktf/provider-azurerm'

eventhubAuthorizationRule.EventhubAuthorizationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.isTerraformResource"></a>

```typescript
import { eventhubAuthorizationRule } from '@cdktf/provider-azurerm'

eventhubAuthorizationRule.EventhubAuthorizationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.generateConfigForImport"></a>

```typescript
import { eventhubAuthorizationRule } from '@cdktf/provider-azurerm'

eventhubAuthorizationRule.EventhubAuthorizationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EventhubAuthorizationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventhubAuthorizationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventhubAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventhubAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.primaryConnectionStringAlias">primaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.secondaryConnectionStringAlias">secondaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference">EventhubAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.eventhubNameInput">eventhubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.listenInput">listenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.manageInput">manageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.namespaceNameInput">namespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.sendInput">sendInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts">EventhubAuthorizationRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.eventhubName">eventhubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.listen">listen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.manage">manage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.send">send</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `primaryConnectionStringAlias`<sup>Required</sup> <a name="primaryConnectionStringAlias" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.primaryConnectionStringAlias"></a>

```typescript
public readonly primaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `secondaryConnectionStringAlias`<sup>Required</sup> <a name="secondaryConnectionStringAlias" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```typescript
public readonly secondaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.timeouts"></a>

```typescript
public readonly timeouts: EventhubAuthorizationRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference">EventhubAuthorizationRuleTimeoutsOutputReference</a>

---

##### `eventhubNameInput`<sup>Optional</sup> <a name="eventhubNameInput" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.eventhubNameInput"></a>

```typescript
public readonly eventhubNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listenInput`<sup>Optional</sup> <a name="listenInput" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.listenInput"></a>

```typescript
public readonly listenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageInput`<sup>Optional</sup> <a name="manageInput" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.manageInput"></a>

```typescript
public readonly manageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.namespaceNameInput"></a>

```typescript
public readonly namespaceNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sendInput`<sup>Optional</sup> <a name="sendInput" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.sendInput"></a>

```typescript
public readonly sendInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EventhubAuthorizationRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts">EventhubAuthorizationRuleTimeouts</a>

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.eventhubName"></a>

```typescript
public readonly eventhubName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listen`<sup>Required</sup> <a name="listen" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.listen"></a>

```typescript
public readonly listen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manage`<sup>Required</sup> <a name="manage" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.manage"></a>

```typescript
public readonly manage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.send"></a>

```typescript
public readonly send: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventhubAuthorizationRuleConfig <a name="EventhubAuthorizationRuleConfig" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.Initializer"></a>

```typescript
import { eventhubAuthorizationRule } from '@cdktf/provider-azurerm'

const eventhubAuthorizationRuleConfig: eventhubAuthorizationRule.EventhubAuthorizationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.eventhubName">eventhubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#eventhub_name EventhubAuthorizationRule#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#name EventhubAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.namespaceName">namespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#namespace_name EventhubAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#resource_group_name EventhubAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#id EventhubAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.listen">listen</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#listen EventhubAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.manage">manage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#manage EventhubAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.send">send</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#send EventhubAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts">EventhubAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.eventhubName"></a>

```typescript
public readonly eventhubName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#eventhub_name EventhubAuthorizationRule#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#name EventhubAuthorizationRule#name}.

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#namespace_name EventhubAuthorizationRule#namespace_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#resource_group_name EventhubAuthorizationRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#id EventhubAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.listen"></a>

```typescript
public readonly listen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#listen EventhubAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.manage"></a>

```typescript
public readonly manage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#manage EventhubAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.send"></a>

```typescript
public readonly send: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#send EventhubAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EventhubAuthorizationRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts">EventhubAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#timeouts EventhubAuthorizationRule#timeouts}

---

### EventhubAuthorizationRuleTimeouts <a name="EventhubAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts.Initializer"></a>

```typescript
import { eventhubAuthorizationRule } from '@cdktf/provider-azurerm'

const eventhubAuthorizationRuleTimeouts: eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#create EventhubAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#delete EventhubAuthorizationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#read EventhubAuthorizationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#update EventhubAuthorizationRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#create EventhubAuthorizationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#delete EventhubAuthorizationRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#read EventhubAuthorizationRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventhub_authorization_rule#update EventhubAuthorizationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventhubAuthorizationRuleTimeoutsOutputReference <a name="EventhubAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { eventhubAuthorizationRule } from '@cdktf/provider-azurerm'

new eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts">EventhubAuthorizationRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventhubAuthorizationRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventhubAuthorizationRule.EventhubAuthorizationRuleTimeouts">EventhubAuthorizationRuleTimeouts</a>

---



