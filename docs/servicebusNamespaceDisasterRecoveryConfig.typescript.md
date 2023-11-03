# `azurerm_servicebus_namespace_disaster_recovery_config`

Refer to the Terraform Registory for docs: [`azurerm_servicebus_namespace_disaster_recovery_config`](https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config).

# `servicebusNamespaceDisasterRecoveryConfig` Submodule <a name="`servicebusNamespaceDisasterRecoveryConfig` Submodule" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusNamespaceDisasterRecoveryConfig <a name="ServicebusNamespaceDisasterRecoveryConfig" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config azurerm_servicebus_namespace_disaster_recovery_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer"></a>

```typescript
import { servicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

new servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig(scope: Construct, id: string, config: ServicebusNamespaceDisasterRecoveryConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig">ServicebusNamespaceDisasterRecoveryConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig">ServicebusNamespaceDisasterRecoveryConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetAliasAuthorizationRuleId">resetAliasAuthorizationRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicebusNamespaceDisasterRecoveryConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

---

##### `resetAliasAuthorizationRuleId` <a name="resetAliasAuthorizationRuleId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetAliasAuthorizationRuleId"></a>

```typescript
public resetAliasAuthorizationRuleId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicebusNamespaceDisasterRecoveryConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isConstruct"></a>

```typescript
import { servicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformElement"></a>

```typescript
import { servicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformResource"></a>

```typescript
import { servicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport"></a>

```typescript
import { servicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServicebusNamespaceDisasterRecoveryConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicebusNamespaceDisasterRecoveryConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicebusNamespaceDisasterRecoveryConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusNamespaceDisasterRecoveryConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.defaultPrimaryKey">defaultPrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.defaultSecondaryKey">defaultSecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryConnectionStringAlias">primaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.secondaryConnectionStringAlias">secondaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference">ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleIdInput">aliasAuthorizationRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceIdInput">partnerNamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryNamespaceIdInput">primaryNamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleId">aliasAuthorizationRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceId">partnerNamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryNamespaceId">primaryNamespaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultPrimaryKey`<sup>Required</sup> <a name="defaultPrimaryKey" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.defaultPrimaryKey"></a>

```typescript
public readonly defaultPrimaryKey: string;
```

- *Type:* string

---

##### `defaultSecondaryKey`<sup>Required</sup> <a name="defaultSecondaryKey" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.defaultSecondaryKey"></a>

```typescript
public readonly defaultSecondaryKey: string;
```

- *Type:* string

---

##### `primaryConnectionStringAlias`<sup>Required</sup> <a name="primaryConnectionStringAlias" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryConnectionStringAlias"></a>

```typescript
public readonly primaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `secondaryConnectionStringAlias`<sup>Required</sup> <a name="secondaryConnectionStringAlias" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.secondaryConnectionStringAlias"></a>

```typescript
public readonly secondaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference">ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a>

---

##### `aliasAuthorizationRuleIdInput`<sup>Optional</sup> <a name="aliasAuthorizationRuleIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleIdInput"></a>

```typescript
public readonly aliasAuthorizationRuleIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partnerNamespaceIdInput`<sup>Optional</sup> <a name="partnerNamespaceIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceIdInput"></a>

```typescript
public readonly partnerNamespaceIdInput: string;
```

- *Type:* string

---

##### `primaryNamespaceIdInput`<sup>Optional</sup> <a name="primaryNamespaceIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryNamespaceIdInput"></a>

```typescript
public readonly primaryNamespaceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServicebusNamespaceDisasterRecoveryConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

---

##### `aliasAuthorizationRuleId`<sup>Required</sup> <a name="aliasAuthorizationRuleId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleId"></a>

```typescript
public readonly aliasAuthorizationRuleId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partnerNamespaceId`<sup>Required</sup> <a name="partnerNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceId"></a>

```typescript
public readonly partnerNamespaceId: string;
```

- *Type:* string

---

##### `primaryNamespaceId`<sup>Required</sup> <a name="primaryNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryNamespaceId"></a>

```typescript
public readonly primaryNamespaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusNamespaceDisasterRecoveryConfigConfig <a name="ServicebusNamespaceDisasterRecoveryConfigConfig" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.Initializer"></a>

```typescript
import { servicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

const servicebusNamespaceDisasterRecoveryConfigConfig: servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#name ServicebusNamespaceDisasterRecoveryConfig#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.partnerNamespaceId">partnerNamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#partner_namespace_id ServicebusNamespaceDisasterRecoveryConfig#partner_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.primaryNamespaceId">primaryNamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#primary_namespace_id ServicebusNamespaceDisasterRecoveryConfig#primary_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.aliasAuthorizationRuleId">aliasAuthorizationRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id ServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#id ServicebusNamespaceDisasterRecoveryConfig#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#name ServicebusNamespaceDisasterRecoveryConfig#name}.

---

##### `partnerNamespaceId`<sup>Required</sup> <a name="partnerNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.partnerNamespaceId"></a>

```typescript
public readonly partnerNamespaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#partner_namespace_id ServicebusNamespaceDisasterRecoveryConfig#partner_namespace_id}.

---

##### `primaryNamespaceId`<sup>Required</sup> <a name="primaryNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.primaryNamespaceId"></a>

```typescript
public readonly primaryNamespaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#primary_namespace_id ServicebusNamespaceDisasterRecoveryConfig#primary_namespace_id}.

---

##### `aliasAuthorizationRuleId`<sup>Optional</sup> <a name="aliasAuthorizationRuleId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.aliasAuthorizationRuleId"></a>

```typescript
public readonly aliasAuthorizationRuleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id ServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#id ServicebusNamespaceDisasterRecoveryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicebusNamespaceDisasterRecoveryConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#timeouts ServicebusNamespaceDisasterRecoveryConfig#timeouts}

---

### ServicebusNamespaceDisasterRecoveryConfigTimeouts <a name="ServicebusNamespaceDisasterRecoveryConfigTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.Initializer"></a>

```typescript
import { servicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

const servicebusNamespaceDisasterRecoveryConfigTimeouts: servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#create ServicebusNamespaceDisasterRecoveryConfig#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#delete ServicebusNamespaceDisasterRecoveryConfig#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#read ServicebusNamespaceDisasterRecoveryConfig#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#update ServicebusNamespaceDisasterRecoveryConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#create ServicebusNamespaceDisasterRecoveryConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#delete ServicebusNamespaceDisasterRecoveryConfig#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#read ServicebusNamespaceDisasterRecoveryConfig#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/servicebus_namespace_disaster_recovery_config#update ServicebusNamespaceDisasterRecoveryConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference <a name="ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

new servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicebusNamespaceDisasterRecoveryConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

---



