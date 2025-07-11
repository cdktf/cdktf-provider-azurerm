# `lbOutboundRule` Submodule <a name="`lbOutboundRule` Submodule" id="@cdktf/provider-azurerm.lbOutboundRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbOutboundRule <a name="LbOutboundRule" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule azurerm_lb_outbound_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer"></a>

```typescript
import { lbOutboundRule } from '@cdktf/provider-azurerm'

new lbOutboundRule.LbOutboundRule(scope: Construct, id: string, config: LbOutboundRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig">LbOutboundRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig">LbOutboundRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putFrontendIpConfiguration">putFrontendIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetAllocatedOutboundPorts">resetAllocatedOutboundPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetEnableTcpReset">resetEnableTcpReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetFrontendIpConfiguration">resetFrontendIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFrontendIpConfiguration` <a name="putFrontendIpConfiguration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putFrontendIpConfiguration"></a>

```typescript
public putFrontendIpConfiguration(value: IResolvable | LbOutboundRuleFrontendIpConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putFrontendIpConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putTimeouts"></a>

```typescript
public putTimeouts(value: LbOutboundRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a>

---

##### `resetAllocatedOutboundPorts` <a name="resetAllocatedOutboundPorts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetAllocatedOutboundPorts"></a>

```typescript
public resetAllocatedOutboundPorts(): void
```

##### `resetEnableTcpReset` <a name="resetEnableTcpReset" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetEnableTcpReset"></a>

```typescript
public resetEnableTcpReset(): void
```

##### `resetFrontendIpConfiguration` <a name="resetFrontendIpConfiguration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetFrontendIpConfiguration"></a>

```typescript
public resetFrontendIpConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetIdleTimeoutInMinutes"></a>

```typescript
public resetIdleTimeoutInMinutes(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbOutboundRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isConstruct"></a>

```typescript
import { lbOutboundRule } from '@cdktf/provider-azurerm'

lbOutboundRule.LbOutboundRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformElement"></a>

```typescript
import { lbOutboundRule } from '@cdktf/provider-azurerm'

lbOutboundRule.LbOutboundRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformResource"></a>

```typescript
import { lbOutboundRule } from '@cdktf/provider-azurerm'

lbOutboundRule.LbOutboundRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.generateConfigForImport"></a>

```typescript
import { lbOutboundRule } from '@cdktf/provider-azurerm'

lbOutboundRule.LbOutboundRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LbOutboundRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbOutboundRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbOutboundRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbOutboundRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.frontendIpConfiguration">frontendIpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList">LbOutboundRuleFrontendIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference">LbOutboundRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.allocatedOutboundPortsInput">allocatedOutboundPortsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.backendAddressPoolIdInput">backendAddressPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.enableTcpResetInput">enableTcpResetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.frontendIpConfigurationInput">frontendIpConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.loadbalancerIdInput">loadbalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.allocatedOutboundPorts">allocatedOutboundPorts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.backendAddressPoolId">backendAddressPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.enableTcpReset">enableTcpReset</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.loadbalancerId">loadbalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `frontendIpConfiguration`<sup>Required</sup> <a name="frontendIpConfiguration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.frontendIpConfiguration"></a>

```typescript
public readonly frontendIpConfiguration: LbOutboundRuleFrontendIpConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList">LbOutboundRuleFrontendIpConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.timeouts"></a>

```typescript
public readonly timeouts: LbOutboundRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference">LbOutboundRuleTimeoutsOutputReference</a>

---

##### `allocatedOutboundPortsInput`<sup>Optional</sup> <a name="allocatedOutboundPortsInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.allocatedOutboundPortsInput"></a>

```typescript
public readonly allocatedOutboundPortsInput: number;
```

- *Type:* number

---

##### `backendAddressPoolIdInput`<sup>Optional</sup> <a name="backendAddressPoolIdInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.backendAddressPoolIdInput"></a>

```typescript
public readonly backendAddressPoolIdInput: string;
```

- *Type:* string

---

##### `enableTcpResetInput`<sup>Optional</sup> <a name="enableTcpResetInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.enableTcpResetInput"></a>

```typescript
public readonly enableTcpResetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `frontendIpConfigurationInput`<sup>Optional</sup> <a name="frontendIpConfigurationInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.frontendIpConfigurationInput"></a>

```typescript
public readonly frontendIpConfigurationInput: IResolvable | LbOutboundRuleFrontendIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idleTimeoutInMinutesInput"></a>

```typescript
public readonly idleTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `loadbalancerIdInput`<sup>Optional</sup> <a name="loadbalancerIdInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.loadbalancerIdInput"></a>

```typescript
public readonly loadbalancerIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LbOutboundRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a>

---

##### `allocatedOutboundPorts`<sup>Required</sup> <a name="allocatedOutboundPorts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.allocatedOutboundPorts"></a>

```typescript
public readonly allocatedOutboundPorts: number;
```

- *Type:* number

---

##### `backendAddressPoolId`<sup>Required</sup> <a name="backendAddressPoolId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.backendAddressPoolId"></a>

```typescript
public readonly backendAddressPoolId: string;
```

- *Type:* string

---

##### `enableTcpReset`<sup>Required</sup> <a name="enableTcpReset" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.enableTcpReset"></a>

```typescript
public readonly enableTcpReset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.loadbalancerId"></a>

```typescript
public readonly loadbalancerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbOutboundRuleConfig <a name="LbOutboundRuleConfig" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.Initializer"></a>

```typescript
import { lbOutboundRule } from '@cdktf/provider-azurerm'

const lbOutboundRuleConfig: lbOutboundRule.LbOutboundRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.backendAddressPoolId">backendAddressPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#backend_address_pool_id LbOutboundRule#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.loadbalancerId">loadbalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#loadbalancer_id LbOutboundRule#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#protocol LbOutboundRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.allocatedOutboundPorts">allocatedOutboundPorts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#allocated_outbound_ports LbOutboundRule#allocated_outbound_ports}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.enableTcpReset">enableTcpReset</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#enable_tcp_reset LbOutboundRule#enable_tcp_reset}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.frontendIpConfiguration">frontendIpConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>[]</code> | frontend_ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#id LbOutboundRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#idle_timeout_in_minutes LbOutboundRule#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendAddressPoolId`<sup>Required</sup> <a name="backendAddressPoolId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.backendAddressPoolId"></a>

```typescript
public readonly backendAddressPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#backend_address_pool_id LbOutboundRule#backend_address_pool_id}.

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.loadbalancerId"></a>

```typescript
public readonly loadbalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#loadbalancer_id LbOutboundRule#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#protocol LbOutboundRule#protocol}.

---

##### `allocatedOutboundPorts`<sup>Optional</sup> <a name="allocatedOutboundPorts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.allocatedOutboundPorts"></a>

```typescript
public readonly allocatedOutboundPorts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#allocated_outbound_ports LbOutboundRule#allocated_outbound_ports}.

---

##### `enableTcpReset`<sup>Optional</sup> <a name="enableTcpReset" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.enableTcpReset"></a>

```typescript
public readonly enableTcpReset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#enable_tcp_reset LbOutboundRule#enable_tcp_reset}.

---

##### `frontendIpConfiguration`<sup>Optional</sup> <a name="frontendIpConfiguration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.frontendIpConfiguration"></a>

```typescript
public readonly frontendIpConfiguration: IResolvable | LbOutboundRuleFrontendIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>[]

frontend_ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#frontend_ip_configuration LbOutboundRule#frontend_ip_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#id LbOutboundRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#idle_timeout_in_minutes LbOutboundRule#idle_timeout_in_minutes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LbOutboundRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#timeouts LbOutboundRule#timeouts}

---

### LbOutboundRuleFrontendIpConfiguration <a name="LbOutboundRuleFrontendIpConfiguration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration.Initializer"></a>

```typescript
import { lbOutboundRule } from '@cdktf/provider-azurerm'

const lbOutboundRuleFrontendIpConfiguration: lbOutboundRule.LbOutboundRuleFrontendIpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}.

---

### LbOutboundRuleTimeouts <a name="LbOutboundRuleTimeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.Initializer"></a>

```typescript
import { lbOutboundRule } from '@cdktf/provider-azurerm'

const lbOutboundRuleTimeouts: lbOutboundRule.LbOutboundRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#create LbOutboundRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#delete LbOutboundRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#read LbOutboundRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#update LbOutboundRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#create LbOutboundRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#delete LbOutboundRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#read LbOutboundRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_outbound_rule#update LbOutboundRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbOutboundRuleFrontendIpConfigurationList <a name="LbOutboundRuleFrontendIpConfigurationList" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer"></a>

```typescript
import { lbOutboundRule } from '@cdktf/provider-azurerm'

new lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.get"></a>

```typescript
public get(index: number): LbOutboundRuleFrontendIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbOutboundRuleFrontendIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>[]

---


### LbOutboundRuleFrontendIpConfigurationOutputReference <a name="LbOutboundRuleFrontendIpConfigurationOutputReference" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer"></a>

```typescript
import { lbOutboundRule } from '@cdktf/provider-azurerm'

new lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbOutboundRuleFrontendIpConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>

---


### LbOutboundRuleTimeoutsOutputReference <a name="LbOutboundRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { lbOutboundRule } from '@cdktf/provider-azurerm'

new lbOutboundRule.LbOutboundRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbOutboundRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a>

---



