# `azurerm_iot_security_device_group`

Refer to the Terraform Registory for docs: [`azurerm_iot_security_device_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group).

# `iotSecurityDeviceGroup` Submodule <a name="`iotSecurityDeviceGroup` Submodule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSecurityDeviceGroup <a name="IotSecurityDeviceGroup" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group azurerm_iot_security_device_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer"></a>

```typescript
import { iotSecurityDeviceGroup } from '@cdktf/provider-azurerm'

new iotSecurityDeviceGroup.IotSecurityDeviceGroup(scope: Construct, id: string, config: IotSecurityDeviceGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig">IotSecurityDeviceGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig">IotSecurityDeviceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putAllowRule">putAllowRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putRangeRule">putRangeRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetAllowRule">resetAllowRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetRangeRule">resetRangeRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAllowRule` <a name="putAllowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putAllowRule"></a>

```typescript
public putAllowRule(value: IotSecurityDeviceGroupAllowRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putAllowRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a>

---

##### `putRangeRule` <a name="putRangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putRangeRule"></a>

```typescript
public putRangeRule(value: IResolvable | IotSecurityDeviceGroupRangeRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putRangeRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: IotSecurityDeviceGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a>

---

##### `resetAllowRule` <a name="resetAllowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetAllowRule"></a>

```typescript
public resetAllowRule(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRangeRule` <a name="resetRangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetRangeRule"></a>

```typescript
public resetRangeRule(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IotSecurityDeviceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isConstruct"></a>

```typescript
import { iotSecurityDeviceGroup } from '@cdktf/provider-azurerm'

iotSecurityDeviceGroup.IotSecurityDeviceGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformElement"></a>

```typescript
import { iotSecurityDeviceGroup } from '@cdktf/provider-azurerm'

iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformResource"></a>

```typescript
import { iotSecurityDeviceGroup } from '@cdktf/provider-azurerm'

iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport"></a>

```typescript
import { iotSecurityDeviceGroup } from '@cdktf/provider-azurerm'

iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IotSecurityDeviceGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotSecurityDeviceGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotSecurityDeviceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IotSecurityDeviceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.allowRule">allowRule</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference">IotSecurityDeviceGroupAllowRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.rangeRule">rangeRule</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList">IotSecurityDeviceGroupRangeRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference">IotSecurityDeviceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.allowRuleInput">allowRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.iothubIdInput">iothubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.rangeRuleInput">rangeRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.iothubId">iothubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowRule`<sup>Required</sup> <a name="allowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.allowRule"></a>

```typescript
public readonly allowRule: IotSecurityDeviceGroupAllowRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference">IotSecurityDeviceGroupAllowRuleOutputReference</a>

---

##### `rangeRule`<sup>Required</sup> <a name="rangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.rangeRule"></a>

```typescript
public readonly rangeRule: IotSecurityDeviceGroupRangeRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList">IotSecurityDeviceGroupRangeRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.timeouts"></a>

```typescript
public readonly timeouts: IotSecurityDeviceGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference">IotSecurityDeviceGroupTimeoutsOutputReference</a>

---

##### `allowRuleInput`<sup>Optional</sup> <a name="allowRuleInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.allowRuleInput"></a>

```typescript
public readonly allowRuleInput: IotSecurityDeviceGroupAllowRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iothubIdInput`<sup>Optional</sup> <a name="iothubIdInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.iothubIdInput"></a>

```typescript
public readonly iothubIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rangeRuleInput`<sup>Optional</sup> <a name="rangeRuleInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.rangeRuleInput"></a>

```typescript
public readonly rangeRuleInput: IResolvable | IotSecurityDeviceGroupRangeRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IotSecurityDeviceGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.iothubId"></a>

```typescript
public readonly iothubId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotSecurityDeviceGroupAllowRule <a name="IotSecurityDeviceGroupAllowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.Initializer"></a>

```typescript
import { iotSecurityDeviceGroup } from '@cdktf/provider-azurerm'

const iotSecurityDeviceGroupAllowRule: iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.connectionFromIpsNotAllowed">connectionFromIpsNotAllowed</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#connection_from_ips_not_allowed IotSecurityDeviceGroup#connection_from_ips_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.connectionToIpsNotAllowed">connectionToIpsNotAllowed</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#connection_to_ips_not_allowed IotSecurityDeviceGroup#connection_to_ips_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.localUsersNotAllowed">localUsersNotAllowed</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#local_users_not_allowed IotSecurityDeviceGroup#local_users_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.processesNotAllowed">processesNotAllowed</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#processes_not_allowed IotSecurityDeviceGroup#processes_not_allowed}. |

---

##### `connectionFromIpsNotAllowed`<sup>Optional</sup> <a name="connectionFromIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.connectionFromIpsNotAllowed"></a>

```typescript
public readonly connectionFromIpsNotAllowed: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#connection_from_ips_not_allowed IotSecurityDeviceGroup#connection_from_ips_not_allowed}.

---

##### `connectionToIpsNotAllowed`<sup>Optional</sup> <a name="connectionToIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.connectionToIpsNotAllowed"></a>

```typescript
public readonly connectionToIpsNotAllowed: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#connection_to_ips_not_allowed IotSecurityDeviceGroup#connection_to_ips_not_allowed}.

---

##### `localUsersNotAllowed`<sup>Optional</sup> <a name="localUsersNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.localUsersNotAllowed"></a>

```typescript
public readonly localUsersNotAllowed: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#local_users_not_allowed IotSecurityDeviceGroup#local_users_not_allowed}.

---

##### `processesNotAllowed`<sup>Optional</sup> <a name="processesNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.processesNotAllowed"></a>

```typescript
public readonly processesNotAllowed: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#processes_not_allowed IotSecurityDeviceGroup#processes_not_allowed}.

---

### IotSecurityDeviceGroupConfig <a name="IotSecurityDeviceGroupConfig" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.Initializer"></a>

```typescript
import { iotSecurityDeviceGroup } from '@cdktf/provider-azurerm'

const iotSecurityDeviceGroupConfig: iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.iothubId">iothubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#iothub_id IotSecurityDeviceGroup#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#name IotSecurityDeviceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.allowRule">allowRule</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a></code> | allow_rule block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#id IotSecurityDeviceGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.rangeRule">rangeRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>[]</code> | range_rule block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.iothubId"></a>

```typescript
public readonly iothubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#iothub_id IotSecurityDeviceGroup#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#name IotSecurityDeviceGroup#name}.

---

##### `allowRule`<sup>Optional</sup> <a name="allowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.allowRule"></a>

```typescript
public readonly allowRule: IotSecurityDeviceGroupAllowRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a>

allow_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#allow_rule IotSecurityDeviceGroup#allow_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#id IotSecurityDeviceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rangeRule`<sup>Optional</sup> <a name="rangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.rangeRule"></a>

```typescript
public readonly rangeRule: IResolvable | IotSecurityDeviceGroupRangeRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>[]

range_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#range_rule IotSecurityDeviceGroup#range_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IotSecurityDeviceGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#timeouts IotSecurityDeviceGroup#timeouts}

---

### IotSecurityDeviceGroupRangeRule <a name="IotSecurityDeviceGroupRangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.Initializer"></a>

```typescript
import { iotSecurityDeviceGroup } from '@cdktf/provider-azurerm'

const iotSecurityDeviceGroupRangeRule: iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#duration IotSecurityDeviceGroup#duration}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#max IotSecurityDeviceGroup#max}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#min IotSecurityDeviceGroup#min}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#type IotSecurityDeviceGroup#type}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#duration IotSecurityDeviceGroup#duration}.

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#max IotSecurityDeviceGroup#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#min IotSecurityDeviceGroup#min}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#type IotSecurityDeviceGroup#type}.

---

### IotSecurityDeviceGroupTimeouts <a name="IotSecurityDeviceGroupTimeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.Initializer"></a>

```typescript
import { iotSecurityDeviceGroup } from '@cdktf/provider-azurerm'

const iotSecurityDeviceGroupTimeouts: iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#create IotSecurityDeviceGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#delete IotSecurityDeviceGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#read IotSecurityDeviceGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#update IotSecurityDeviceGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#create IotSecurityDeviceGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#delete IotSecurityDeviceGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#read IotSecurityDeviceGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/iot_security_device_group#update IotSecurityDeviceGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotSecurityDeviceGroupAllowRuleOutputReference <a name="IotSecurityDeviceGroupAllowRuleOutputReference" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer"></a>

```typescript
import { iotSecurityDeviceGroup } from '@cdktf/provider-azurerm'

new iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetConnectionFromIpsNotAllowed">resetConnectionFromIpsNotAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetConnectionToIpsNotAllowed">resetConnectionToIpsNotAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetLocalUsersNotAllowed">resetLocalUsersNotAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetProcessesNotAllowed">resetProcessesNotAllowed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionFromIpsNotAllowed` <a name="resetConnectionFromIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetConnectionFromIpsNotAllowed"></a>

```typescript
public resetConnectionFromIpsNotAllowed(): void
```

##### `resetConnectionToIpsNotAllowed` <a name="resetConnectionToIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetConnectionToIpsNotAllowed"></a>

```typescript
public resetConnectionToIpsNotAllowed(): void
```

##### `resetLocalUsersNotAllowed` <a name="resetLocalUsersNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetLocalUsersNotAllowed"></a>

```typescript
public resetLocalUsersNotAllowed(): void
```

##### `resetProcessesNotAllowed` <a name="resetProcessesNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetProcessesNotAllowed"></a>

```typescript
public resetProcessesNotAllowed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionFromIpsNotAllowedInput">connectionFromIpsNotAllowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionToIpsNotAllowedInput">connectionToIpsNotAllowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.localUsersNotAllowedInput">localUsersNotAllowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.processesNotAllowedInput">processesNotAllowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionFromIpsNotAllowed">connectionFromIpsNotAllowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionToIpsNotAllowed">connectionToIpsNotAllowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.localUsersNotAllowed">localUsersNotAllowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.processesNotAllowed">processesNotAllowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionFromIpsNotAllowedInput`<sup>Optional</sup> <a name="connectionFromIpsNotAllowedInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionFromIpsNotAllowedInput"></a>

```typescript
public readonly connectionFromIpsNotAllowedInput: string[];
```

- *Type:* string[]

---

##### `connectionToIpsNotAllowedInput`<sup>Optional</sup> <a name="connectionToIpsNotAllowedInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionToIpsNotAllowedInput"></a>

```typescript
public readonly connectionToIpsNotAllowedInput: string[];
```

- *Type:* string[]

---

##### `localUsersNotAllowedInput`<sup>Optional</sup> <a name="localUsersNotAllowedInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.localUsersNotAllowedInput"></a>

```typescript
public readonly localUsersNotAllowedInput: string[];
```

- *Type:* string[]

---

##### `processesNotAllowedInput`<sup>Optional</sup> <a name="processesNotAllowedInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.processesNotAllowedInput"></a>

```typescript
public readonly processesNotAllowedInput: string[];
```

- *Type:* string[]

---

##### `connectionFromIpsNotAllowed`<sup>Required</sup> <a name="connectionFromIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionFromIpsNotAllowed"></a>

```typescript
public readonly connectionFromIpsNotAllowed: string[];
```

- *Type:* string[]

---

##### `connectionToIpsNotAllowed`<sup>Required</sup> <a name="connectionToIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionToIpsNotAllowed"></a>

```typescript
public readonly connectionToIpsNotAllowed: string[];
```

- *Type:* string[]

---

##### `localUsersNotAllowed`<sup>Required</sup> <a name="localUsersNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.localUsersNotAllowed"></a>

```typescript
public readonly localUsersNotAllowed: string[];
```

- *Type:* string[]

---

##### `processesNotAllowed`<sup>Required</sup> <a name="processesNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.processesNotAllowed"></a>

```typescript
public readonly processesNotAllowed: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotSecurityDeviceGroupAllowRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a>

---


### IotSecurityDeviceGroupRangeRuleList <a name="IotSecurityDeviceGroupRangeRuleList" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer"></a>

```typescript
import { iotSecurityDeviceGroup } from '@cdktf/provider-azurerm'

new iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.get"></a>

```typescript
public get(index: number): IotSecurityDeviceGroupRangeRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityDeviceGroupRangeRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>[]

---


### IotSecurityDeviceGroupRangeRuleOutputReference <a name="IotSecurityDeviceGroupRangeRuleOutputReference" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer"></a>

```typescript
import { iotSecurityDeviceGroup } from '@cdktf/provider-azurerm'

new iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityDeviceGroupRangeRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>

---


### IotSecurityDeviceGroupTimeoutsOutputReference <a name="IotSecurityDeviceGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { iotSecurityDeviceGroup } from '@cdktf/provider-azurerm'

new iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityDeviceGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a>

---



